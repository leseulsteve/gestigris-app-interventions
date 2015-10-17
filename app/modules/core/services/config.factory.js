'use strict';

angular.module('core').factory('Config',
  function (Schema) {

    var Config = new Schema('config');

    Config.get = function (configName) {
      return Config.find({
        name: configName
      }).then(function (results) {
        var config = new Config(JSON.parse(results[0].data));
        config.data = undefined;
        config.name = configName;
        return config;
      });
    };

    function handleData(config) {
      var data = {};
      _.forOwn(config, function (value, key) {
        if (key !== 'name' && !_.isFunction(value)) {
          data[key] = value;
        }
      });
      delete config.data;
      return config;
    }

    Config.pre('create', function (next) {
      handleData(this);
      next();
    });

    Config.pre('save', function (next) {
      handleData(this);
      next();
    });

    return Config;

  });
