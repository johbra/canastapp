(ns canastcljs.spiel
  (:require [canastcljs.spieler :as s]
            [canastcljs.drop-file-stream :as ds]))

;; Konstruktoren

(defn ->Spiel []
  {:teilnehmer [] :runde 0 :spielBeendet? false :sieger nil :geber nil})

(defn keine-korrektur
  [world]
  (swap! world assoc :korrektur false))

(defn teilnehmer-vorhanden? [spiel] (not (empty? (:teilnehmer spiel))))

(defn anzahl-runden
  [spiel]
  (count (s/resultate (first (:teilnehmer spiel))))) 
        
(defn begonnenes-spiel?
  [spiel]
  (and (not (:spiel-beendet? spiel))
       (teilnehmer-vorhanden? spiel)
       (> (anzahl-runden spiel) 0)))

(defn standard-spiel
  [w]
  (swap! w (assoc-in @w [:spiel :teilnehmer] [(s/->Spieler "Meike") (s/->Spieler "Hannes")]))
  (swap! w (assoc-in @w [:spiel :beendet] false))
  (swap! w (assoc-in @w [:spiel :geber] nil))
  ;; f := DropFileStream fileNamed: 'log.txt'.
  ;; f nextPutAll: 'Neues Spiel '; nextPutAll: DateAndTime now printString; cr.
  ;; DropFileStream write: f to: 'log.txt'. 
  )

(defn neues-spiel
  [world] 
  (when (begonnenes-spiel? spiel)
    (println "Es gibt ein angefangenes Spiel"))
  (println "neues-spiel")
  (if (ds/exists-file-named? "model.fuel")
    (println "begonnens Spiel fortsetzen?")
    (do (keine-korrektur world)
        (standard-spiel world)))
  )

;; self model begonnenesSpiel
;; ifTrue: [ (self confirm: 'Es gibt ein angefangenes Spiel. Soll das abgebrochen werden?')
;;          ifFalse: [ ^ self ]
;;          ifTrue: [ self model standardSpiel.
;;                   self initHistorieDrop.
;;                   ^ self ] ].
;; (DropFileStream isAFileNamed: 'model.fuel')
;; ifTrue: [ (self confirm: 'Es gibt ein gespeichertes Spiel. Das könnte fortgesetzt werden.')
;;          ifTrue: [ ^ self restauriereSpiel ] ].
;; self korrektur: false.
;; self model standardSpiel.
;; self initHistorieDrop

(defn restauriere-spiel
  [spiel]
  (println "restauriere-spiel"))




