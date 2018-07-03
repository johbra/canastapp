(ns ^:figwheel-no-load canastcljs.dev
  (:require
    [canastcljs.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
