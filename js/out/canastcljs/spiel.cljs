(ns canastcljs.spiel
  (:require [canastcljs.spieler :as s]
            [canastcljs.drop-file-stream :as df]))

;; Konstruktoren

(defn ->Spiel []
  {:teilnehmer [] :runde 0 :spiel-beendet? false :sieger nil :geber nil})

;; Getter
(defn geber
  [spiel]
  (:geber spiel))

(defn runde
  [spiel]
  (:runde spiel))

(defn spiel-beendet?
  [spiel]
  (:spiel-beendet? spiel))

(defn sieger
  [spiel]
  (:sieger spiel))

(defn spiel-nicht-beendet
  [spiel]
  (assoc spiel :spiel-beendet? false))

;; diverse
(defn keine-korrektur
  [world]
  (assoc world :korrektur false))

(defn teilnehmer-vorhanden? [spiel] (not (empty? (:teilnehmer spiel))))

(defn spieler-mit-namen
  [name spiel]
  (first (filter #(= name (:spieler-name %)) (:teilnehmer spiel))))

(defn anzahl-runden
  [spiel]
  (count (s/resultate (first (:teilnehmer spiel)))))

(defn geber-festgelegt?
  [spiel]
  (not (nil? (:geber spiel))))

(defn begonnenes-spiel?
  [spiel]
  (and (not (:spiel-beendet? spiel))
       (teilnehmer-vorhanden? spiel)
       (> (anzahl-runden spiel) 0)))

(defn standard-spiel
  []
  (assoc (->Spiel) :teilnehmer [(s/->Spieler "Meike") (s/->Spieler "Hannes")]))

(defn neues-spiel 
  []
  (let [w (standard-spiel)]
    w)) 

(defn teilnehmer-namen
  [spiel]
  (sort > (map s/spieler-name (:teilnehmer spiel))))

(defn restauriere-spiel
  [spiel]
  (println "restauriere-spiel"))

(defn registriere
  [spiel resultate] 
  (let [teiln (map (fn [[name res]] (s/registriere (spieler-mit-namen name spiel) res)) resultate)
        runde (inc (:runde spiel))
        sieger (last (sort-by :summe teiln))
        geber (first (filter #(not (= % (:geber spiel))) (teilnehmer-namen spiel)))
        s (assoc spiel :runde runde)]
    (assoc s
           :teilnehmer teiln
           :spiel-beendet? (>= (:summe sieger) 5000)
           :sieger (when (>= (:summe sieger) 5000) (:spieler-name sieger))
           :geber geber)))

(defn korrigiere
  [spiel resultate] 
  (let [teiln (map (fn [[name res]] (s/korrigiere (spieler-mit-namen name spiel) res)) resultate) 
        sieger (last (sort-by :summe teiln))]
    (println "sieger: " sieger)
    (assoc spiel
           :teilnehmer teiln
           :spiel-beendet? (>= (:summe sieger) 5000)
           :sieger (when (>= (:summe sieger) 5000) (:spieler-name sieger)))))

(defn resultat-in-runde
  [spiel tln runde]
  (get (:resultate (spieler-mit-namen tln spiel)) runde))

(defn zwischen-summe
  [spiel tln runde]
  (s/zwischen-summe (spieler-mit-namen tln spiel) runde))

(defn letztes-resultat
  [spiel tln]
  (let [s (spieler-mit-namen tln spiel)]
    (last (:resultate s))))
