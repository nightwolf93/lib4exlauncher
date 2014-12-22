class lib4exlauncher
  constructor: (@apikey) ->
    @version = { major: 1, minor: 0, revision: 0 }
    @getAccountByApiKey()

  getAccountByApiKey: () ->

class exLauncherAccount
  constructor: ->
    @id = -1
    @email = ''
