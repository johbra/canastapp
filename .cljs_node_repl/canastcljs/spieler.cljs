(ns canastcljs.spieler)

;; Konstruktoren

(defn ->Spieler [n]
  {:resultate [] :summe 0 :spieler-name "n" :gewonnene-spiele 0})

;; Getter
(defn resultate
  [sp]
  (:resultate sp))






