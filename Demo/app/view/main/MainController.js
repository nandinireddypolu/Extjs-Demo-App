/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    // onSubmit: function () {
    //     var form = this.getView();

    //     form.submit({
    //         url: 'data/data.json',
    //         success: function () {
    //             Ext.Msg.alert('Form submitted successfully!');
    //         }
    //     });
    // }


    

});
