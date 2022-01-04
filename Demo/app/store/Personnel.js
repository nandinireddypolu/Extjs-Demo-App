Ext.define('Demo.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    autoSync: true,
    model: 'Demo.model.Personnel',
    autoLoad: true,
    pageSize: 5,
    data:[],
    proxy: {
        type: 'ajax',
        url: 'data/data.json'
    },

});

