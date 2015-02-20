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

  fixtures: false
});

if(steal.config('fixtures')) {
  steal.dev.log("FIXTURES USED");

  System.meta['app/app'] = {
    deps: ['app/fixtures']
  };
}

System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
