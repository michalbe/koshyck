steal.config({
  map: {
    "jquery/jquery": "jquery"
  },
  paths: {
    "steal/*" : "../*.js",
    "@traceur": "traceur/traceur.js",
    "can/*": "site/components/canjs/*.js",
    "jquery": "site/components/jquery/dist/jquery.js"
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

  System.meta['site/site'] = {
    deps: ['site/fixtures']
  };
}

System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
