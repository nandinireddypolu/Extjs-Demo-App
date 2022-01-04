Ext.define('Demo.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'formlist',
    title: 'Employee Form',
    initComponent: function() {
        Ext.apply(this, {
    height: 300,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            allowBlank:false,
            maskRe: /[a-z]/i,

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            allowBlank:false,
            maskRe: /[a-z]/i,
            name: 'lastName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Office Location',
            allowBlank:false,
            name: 'officelocation'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Phone Number',
            allowBlank:false,
            minLength: 10,
            maxLength: 10,
            name: 'phone'
        },
        
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-save',
            itemId: 'save',
            text: 'Save',
            //disabled: true,
            scope: this,
            handler: this.onSave
        }, {
            iconCls: 'icon-user-add',
            text: 'Submit',
            scope: this,
            handler: this.onCreate
        }, {
            iconCls: 'icon-reset',
            text: 'Cancle',
            scope: this,
            handler: this.onReset
        }]
    }]
});
this.callParent();
},

setActiveRecord: function(record) {
this.activeRecord = record;

if (record) {
    this.down('#save').enable();
    this.getForm().loadRecord(record);
}
else {
    this.down('#save').disable();
    this.getForm().reset();
}
},

onSave: function() {
var active = this.activeRecord,
    form = this.getForm();

if (!active) {
    return;
}

if (form.isValid()) {
    form.updateRecord(active);
    this.onReset();
}
},

onCreate: function() {
var form = this.getForm();

if (form.isValid()) {
    this.fireEvent('create', this, form.getValues());
    form.reset();
}

},

onReset: function() {
this.setActiveRecord(null);
this.getForm().reset();
}
});