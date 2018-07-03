([:html
  [:body
   [:div.navi
    [:ul#menu
     [:li
      [:a
       {:href "/CanastApp?_s=1hx4FN5B1Qy7jMQz&_k=boq3J3e8DBY-asvk&6"}
       "Neues Spiel"]]
     [:li
      [:a
       {:href "/CanastApp?_s=1hx4FN5B1Qy7jMQz&_k=boq3J3e8DBY-asvk&7"}
       "Begonnenes Spiel fortsetzen"]]]]
   [:h1 "Canasta"]
   [:div.gwspiele "Gewonnene Spiele bisher: "]
   [:div
    [:table
     [:tr [:th "Marijke"] [:th "Johannes"]]
     [:tr [:td "502"] [:td "418"]]]]
   [:div.rTable
    [:div.rTableHeading
     [:div.rTableRow
      [:div.rTableHead.small "Rde."]
      [:div.rTableHead "Marijke"]
      [:div.rTableHead "Johannes"]]]
    [:div.rTableBody
     [:form
      {:accept-charset "utf-8",
       :method "post",
       :action "/CanastApp?_s=1hx4FN5B1Qy7jMQz&_k=boq3J3e8DBY-asvk"}
      [:div.rTableRow
       [:div.rTableCell.small "1"]
       [:div.rTableCell [:input {:name "8", :value "", :type "text"}]]
       [:div.rTableCell [:input {:name "9", :value "", :type "text"}]]]
      [:div.rTableCell
       [:input.mybutton
        {:name "10", :value "speichern", :type "submit"}]]]]]
   [:div.nebentab
    [:div.geber
     [:form
      {:accept-charset "utf-8",
       :method "post",
       :action "/CanastApp?_s=1hx4FN5B1Qy7jMQz&_k=boq3J3e8DBY-asvk"}
      "Johannes muss geben."]]]]])
