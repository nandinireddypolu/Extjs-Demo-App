/**
 * This view is an example list of people.
 */
Ext.define('Demo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    title: 'Employee List',
    iconCls: 'icon-grid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
    ],

    initComponent: function(){

        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
    
        var store = Ext.create('Demo.store.Personnel');
    
        Ext.apply(this, {
            height: this.height,
            frame: true,
            plugins: {
                cellediting: true
            },
            store: store,
            stripeRows: true,
            columnLines: true,


    selModel:{
        mode: 'single',
        injectCheckbox:'first',
        checkOnly:true,
        Model:'SIMPLE',
        type:'checkboxmodel'
    },
    
    columns: [
        { text: 'First Name',  dataIndex: 'firstname', sortable : true, flex: 1  },
        { text: 'Last Name', dataIndex: 'lastname', sortable : true, flex: 1 },
        { text: 'Office Location', dataIndex: 'officelocation', sortable : true, flex: 1 },
        { text: 'Phone', dataIndex: 'phone', sortable : true, flex: 1 }
    ],

    bbar: [{
        
            iconCls: 'icon-add',
            text: 'Add',
            scope: this,
            handler: this.onAddClick
        }, {
            iconCls: 'icon-delete',
            text: 'Delete',
            disabled: true,
            itemId: 'delete',
            scope: this,
            handler: this.onDeleteClick
        }]
});

this.callParent(arguments);

this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onSelectChange: function(selModel, selections) {
        this.down('#delete').setDisabled(selections.length === 0);
    },

    onSync: function() {
        this.store.sync();
    },

    onDeleteClick: function() {
        var selection = this.getView().getSelectionModel().getSelection()[0];

        if (selection) {
            this.store.remove(selection);
        }
    },

    onAddClick: function() {
        var rec = new Demo.model.Personnel({
                firstname: '',
                lastname: '',
                officelocation: '',
                phone: ''
            }),
            edit = this.findPlugin('cellediting');

        edit.cancelEdit();
        this.store.insert(0, rec);
        edit.startEditByPosition({
            row: rec,
            column: 1
        });
    }
});



