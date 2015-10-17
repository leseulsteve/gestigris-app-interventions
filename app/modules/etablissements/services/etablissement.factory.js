'use strict';

angular.module('etablissements').factory('Etablissement',
  function ($q, Schema, EtablissementType, Arrondissement, Ville, Province) {

    var Etablissement = new Schema('etablissement');

    Etablissement.post('find', function (next) {

      this.imageUrl = Math.random() < 0.5 ? 'http://www.shlr.org/wp/wp-content/uploads/2015/06/98996879logo-es-neuchatel-gif.gif' : 'http://magiedusucces.com/wp-content/uploads/2013/04/logo-la-courvilloise.gif';

      var that = this,
        promises = [];

      promises.push(EtablissementType.findById(this.type).then(function (etablissementType) {
        that.type = etablissementType;
      }));

      if (this.address.arrondissement) {
        promises.push(Arrondissement.findById(this.address.arrondissement).then(function (arrondissement) {
          that.address.arrondissement = arrondissement;
        }));
      }

      promises.push(Ville.findById(this.address.city).then(function (city) {
        that.address.city = city;
      }));

      promises.push(Province.findById(this.address.province).then(function (province) {
        that.address.province = province;
      }));

      $q.all(promises).then(function () {

        that.address.toString = function () {
          return that.address.street + ', ' + that.address.city.toString();
        };

        next();
      });
    });

    Etablissement.prototype.toString = function () {
      return this.name;
    };

    return Etablissement;
  });
