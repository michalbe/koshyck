steal.config({
  map: {
    "jquery/jquery": "jquery"
  },
  paths: {
    "steal/*" : "../*.js",
    "@traceur": "traceur/traceur.js",
    "can/*": "app/components/canjs/*.js",
    "jquery": "app/components/jquery/dist/jquery.js"
  },
  meta: {
    jquery: {
      exports: "jQuery",
      format: "global"
    }
  },

  ext: {
    "mustache": "can/view/mustache/system"
  },

  fixtures: true
});

if(steal.config('fixtures')) {
  System.meta['app/app'] = {
    deps: ['app/fixtures/fixtures']
  };
}

System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
