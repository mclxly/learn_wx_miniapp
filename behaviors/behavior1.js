module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  created: function () { console.log('behavior 1 created ') },
  attached: function () { console.log('behavior 1 attached ') },
  methods: {
    myBehaviorMethod: function () { }
  }
})