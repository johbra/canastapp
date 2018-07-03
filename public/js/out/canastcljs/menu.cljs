(ns canastcljs.menu
  (:require [reagent.core :as r]
            [reagent-modals.modals :as reagent-modals]))

(defn menu
  [menu-items]
  [:div.navi
   [:ul#menu
    [:li
     [:a
      {:on-click (:neues-spiel menu-items)}
      "Neues Spiel"]]
    [:li
     [:a
      {:on-click (:begonnenes-ignorieren menu-items)}
      "Begonnenes Spiel verwerfen"]]
    [:li
     [:a
      {:on-click (:restauriere-spiel menu-items)
       }
      "Begonnenes Spiel fortsetzen"]]]])
