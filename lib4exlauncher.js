(function() {
  var exLauncherAccount, lib4exlauncher;

  lib4exlauncher = (function() {
    function lib4exlauncher(apikey) {
      this.apikey = apikey;
      this.version = {
        major: 1,
        minor: 0,
        revision: 0
      };
      this.getAccountByApiKey();
    }

    lib4exlauncher.prototype.getAccountByApiKey = function() {};

    return lib4exlauncher;

  })();

  exLauncherAccount = (function() {
    function exLauncherAccount() {
      this.id = -1;
      this.email = '';
    }

    return exLauncherAccount;

  })();

}).call(this);
