(ns canastcljs.spieler)

;; Konstruktoren

(defn ->Spieler [n]
  {:resultate [] :summe 0 :spieler-name n :gewonnene-spiele 0})

;; Getter
(defn resultate
  [sp]
  (:resultate sp))

(defn spieler-name
  [s]
  (:spieler-name s))

;;
(defn registriere 
  [s r]
  (let [resultate (conj (:resultate s) r)
        summe (reduce + resultate)
        spieler (assoc s :resultate resultate :summe summe)] 
    spieler))

(defn korrigiere 
  [s r]
  (let [resultate (assoc (:resultate s) (dec (count (:resultate s))) r)
        summe (reduce + resultate)
        spieler (assoc s :resultate resultate :summe summe)] 
    spieler))

(defn zwischen-summe
  [s runde]
  (reduce + (take runde (:resultate s))))






