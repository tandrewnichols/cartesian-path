hasRequire = typeof require == 'function'

expect = if hasRequire then require('expect.js') else expect

describe 'expand-path', ->
  Given -> @expand = if hasRequire then require '../lib/expand-path' else window.expandPath

  context 'with no expansion', ->
    When -> @list = @expand 'foo.bar.baz'
    Then -> expect(@list).to.eql ['foo.bar.baz']

  context 'with expansion', ->
    context 'and brackets', ->
      When -> @list = @expand 'foo.bar.[baz,quux]'
      Then -> expect(@list).to.eql [
        'foo.bar.baz',
        'foo.bar.quux'
      ]

    context 'with braces', ->
      When -> @list = @expand 'foo.bar.{baz,quux}'
      Then -> expect(@list).to.eql [
        'foo.bar.baz',
        'foo.bar.quux'
      ]

    context 'with angled brackets', ->
      When -> @list = @expand 'foo/bar/<baz,quux>'
      Then -> expect(@list).to.eql [
        'foo/bar/baz',
        'foo/bar/quux'
      ]

    context 'multiple expansions', ->
      When -> @list = @expand 'foo.bar.[baz,quux].hello.world[.js,-spec.coffee]'
      Then -> expect(@list).to.eql [
        'foo.bar.baz.hello.world.js',
        'foo.bar.quux.hello.world.js',
        'foo.bar.baz.hello.world-spec.coffee',
        'foo.bar.quux.hello.world-spec.coffee'
      ]
