(ns canastcljs.menu
  (:require [reagent.core :as r]))

(defn menu
  [menu-items]
  [:div.navi
   [:ul#menu
    (when (:neues-spiel menu-items) [:li
                                     [:a
                                      {:on-click (:neues-spiel menu-items)}
                                      "Neues Spiel"]])
    (when (:begonnenes-ignorieren menu-items) [:li
                                               [:a
                                                {:on-click (:begonnenes-ignorieren menu-items)}
                                                "Begonnenes Spiel verwerfen"]])
    [:li
     [:a
      {:on-click (:restauriere-spiel menu-items)
       }
      "Begonnenes Spiel fortsetzen"]]]])
