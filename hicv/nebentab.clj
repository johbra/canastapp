([:html
  [:body
   [:div.nebentab
    [:div.geber
     [:form
      {:accept-charset "utf-8",
       :method "post",
       :action "/CanastApp?_s=CYDK_wJox2gqmzgh&_k=0kOUFuFLhwCLd-xF"}
      [:select
       {:onchange "$(this).closest(\"form\").submit()", :name "11"}
       [:option {:value "1"} "Marijke"]
       [:option {:value "2"} "Johannes"]
       [:option {:value "3", :selected "selected"} "noch festzulegen"]]
      " muss geben.\n    "]]]]])
