(ns canastcljs.prod
  (:require [canastcljs.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
