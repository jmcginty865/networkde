$(document).ready(function(){
    $(".nav-link").click(function(){
        if ($(this).hasClass('active')){
            $('#' + this.hash.substr(1).toLowerCase()).toggleClass('active');
        }
    });
});


//Member Auth checkbox

$(document).ready(function(){

    var form = $('#memberForm');
    var checkbox = $('#changeShip');
    var chShipBlock = $('#changeShipInputs');
    var uandpblock = $('#changeShipOutputs');

    chShipBlock.hide();

    checkbox.on('click', function () {
        if($(this).is(':checked')){

            chShipBlock.show();
            chShipBlock.find('input').attr('required', true);

            uandpblock.hide();
            uandpblock.find('input').attr('required', false);

        }else{
            chShipBlock.hide();
            chShipBlock.find('input').attr('required', false);

            uandpblock.show();
            uandpblock.find('input').attr('required', true);
        }
    })


});




//Care Manager Auth checkbox


$(document).ready(function(){

    var form = $('#caremanagerForm');
    var CMcheckbox = $('#CMchangeShip');
    var chShipBlock = $('#CMchangeShipInputs');
    var uandpblock = $('#CMchangeShipOutputs');

    chShipBlock.hide();

    CMcheckbox.on('click', function () {
        if($(this).is(':checked')){

            chShipBlock.show();
            chShipBlock.find('input').attr('required', true);

            uandpblock.hide();
            uandpblock.find('input').attr('required', false);

        }else{
            chShipBlock.hide();
            chShipBlock.find('input').attr('required', false);

            uandpblock.show();
            uandpblock.find('input').attr('required', true);
        }
    })


});



$(document).ready(function(){

    var form = $('#guardianForm');
    var Gcheckbox = $('#GchangeShip');
    var chShipBlock = $('#GchangeShipInputs');
    var uandpblock = $('#GchangeShipOutputs');


    chShipBlock.hide();

    Gcheckbox.on('click', function () {
        if($(this).is(':checked')){

            chShipBlock.show();
            chShipBlock.find('input').attr('required', true);

            uandpblock.hide();
            uandpblock.find('input').attr('required', false);

        }else{
            chShipBlock.hide();
            chShipBlock.find('input').attr('required', false);

            uandpblock.show();
            uandpblock.find('input').attr('required', true);
        }
    })

});







//Member Form

$(document).ready(function(){

    $('#memberButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                   // $('#display1').html(data.access_token);
                    $.ajax({
                        //!!!POINT URL TO LOCAL!!!
                        //url: "http://localhost:4545/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#memberForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            alert('Result' +JSON.stringify(response));
                           // $('#display2').html("RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});


//Member Search

$(document).ready(function(){

    $('#memberSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        data : $('#memberSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {
                        //  $('#display3').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                           console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                               var result = response[x].message;
                                for(y in result){
                                   result[y]
                                    $('#username').val(result[y].profile.username);
                                    $('#email').val(result[y].profile.email);
                                    $('#password').val(result[y].profile.password);  //disable this
                                    $('#first_name').val(result[y].profile.first_name);
                                    $('#last_name').val(result[y].profile.last_name);
                                    $('#address1').val(result[y].profile.address1);
                                    $('#address2').val(result[y].profile.address2);
                                    $('#city').val(result[y].profile.city);
                                    $('#state').val(result[y].profile.state);
                                    $('#zipcode').val(result[y].profile.zipcode);
                                    $('#mobile').val(result[y].profile.phones["mobile"]);
                                    $('#home').val(result[y].profile.phones["home"]);
                                    $('#office').val(result[y].profile.phones["office"]);
                                    $('#tenant_id').val(result[y].profile.tenant_id);
                                    $('#partner_id').val(result[y].profile.partner_id);
                                    $('#role').val(result[y].profile.role);
                                    $('#birthdate').val(result[y].profile.birthdate);
                                    $('#care_manager').val(result[y].profile.care_manager);
                                   // $('#statuslabel').hide();
                                   // $('#status').hide();
                                   // $("#status_display").val(result[y].profile.status);
                                    $('#status').val(result[y].profile.status);
                                    $('#effective_date').val(result[y].profile.effective_date);
                                    $('#cch_id').val(result[y].profile.cch_id);
                                   // $('#ldap_id').val(result[y].profile.ldap_id);
                                    //$('#theform').append('<label for="status_display">Status</label><input type="text" class="form-control" id="status_display" name="status_display" disabled >');
                                   // $("#status_display").val(result[y].profile.status);

                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});





//Care Manager Form

$(document).ready(function(){

    $('#caremanagerButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {
                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#caremanagerForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {
                            alert('Result' +JSON.stringify(response));
                           // $('#display4').html("RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});


//Care Manager Search

$(document).ready(function(){

    $('#caremanagerSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    // $('#display1').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        data : $('#caremanagerSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                           // $('#display5').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#cmusername').val(result[y].profile.username);
                                    $('#cmemail').val(result[y].profile.email);
                                    $('#cmpassword').val(result[y].profile.password);  //disable this
                                    $('#cmfirst_name').val(result[y].profile.first_name);
                                    $('#cmlast_name').val(result[y].profile.last_name);
                                    $('#cmzipcode').val(result[y].profile.zipcode);
                                    $('#cmoffice').val(result[y].profile.phones["office"]);
                                    $('#cmmobile').val(result[y].profile.phones["mobile"]);
                                    $('#cmtenant_id').val(result[y].profile.tenant_id);
                                    $('#cmpartner_id').val(result[y].profile.partner_id);
                                    $('#cmrole').val(result[y].profile.role);
                                    $('#cmstatus').val(result[y].profile.status);
                                    $('#cmeffective_date').val(result[y].profile.effective_date);
                                    $('#cmcch_id').val(result[y].profile.cch_id);
                                    //$('#cmldap_id').val(result[y].profile.ldap_id);


                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});





//Care Giver Form

$(document).ready(function(){

    $('#caregiverButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                   // $('#display6').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#caregiverForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            alert('Result' +JSON.stringify(response));
                          //  $('#display6').html("SEARCH RESULT ==>  " + (JSON.stringify(posted.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});



//Care Giver search

$(document).ready(function(){

    $('#caregiverSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#caregiverSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                           // $('#display7').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#cgfullname').val(result[y].profile.full_name);
                                    $('#cgemail').val(result[y].profile.email);
                                    $('#cgpassword').val(result[y].profile.password);  //disable this
                                    $('#cgfirst_name').val(result[y].profile.first_name);
                                    $('#cglast_name').val(result[y].profile.last_name);
                                    $('#cgaddress1').val(result[y].profile.address1);
                                    $('#cgaddress2').val(result[y].profile.address2);
                                    $('#cgcity').val(result[y].profile.city);
                                    $('#cgstate').val(result[y].profile.state);
                                    $('#cgzipcode').val(result[y].profile.zipcode);
                                    $('#cgoffice').val(result[y].profile.phones["office"]);
                                    $('#cgmobile').val(result[y].profile.phones["mobile"]);
                                    $('#cgtenant_id').val(result[y].profile.tenant_id);
                                    $('#cgrelationship').val(result[y].profile.relationship);
                                    $('#cgstatus').val(result[y].profile.status);
                                    $('#cgpartner_id').val(result[y].profile.partner_id);
                                    $('#cgrole').val(result[y].profile.role);
                                   // $('#birthdate').val(result[y].profile.birthdate);
                                    $('#cgeffective_date').val(result[y].profile.effective_date);
                                    $('#member_partner_id').val(result[y].profile.member_partner_id);
                                    $('#cgcch_id').val(result[y].profile.cch_id);
                                   // $('#cgldap_id').val(result[y].profile.ldap_id);
                                   // $('#status').val(result[y].profile.status);

                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});


//TO DO's

//Guardian Form

//Guardian still in progress in regards to backend api

$(document).ready(function(){

    $('#guardianButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#guardianForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            alert('Result' +JSON.stringify(response));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});





//Guardian search still in progress in regards to backend api


//Guardian search
$(document).ready(function(){

    $('#guardianSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#guardianSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            // $('#display7').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#gdpartner_id').val(result[y].profile.partner_id);
                                    $('#gdusername').val(result[y].profile.username);
                                    $('#gdpassword').val(result[y].profile.password);  //disable this
                                    $('#gdemail').val(result[y].profile.email);
                                    $('#gdfirst_name').val(result[y].profile.first_name);
                                    $('#gdlast_name').val(result[y].profile.last_name);
                                    $('#gdaddress1').val(result[y].profile.address1);
                                    $('#gdaddress2').val(result[y].profile.address2);
                                    $('#gdcity').val(result[y].profile.city);
                                    $('#gdstate').val(result[y].profile.state);
                                    $('#gdzipcode').val(result[y].profile.zipcode);
                                    $('#gdmobile').val(result[y].profile.phones["mobile"]);
                                    $('#gdhome').val(result[y].profile.phones["home"]);
                                    $('#gdoffice').val(result[y].profile.phones["office"]);
                                    $('#gdrelationship').val(result[y].profile.relationship);
                                    $('#gdstatus').val(result[y].profile.status);
                                    $('#gdrole').val(result[y].profile.role);
                                    $('#gdbirthdate').val(result[y].profile.birthdate);
                                    $('#gdmember_partner_id').val(result[y].profile.member_partner_id);
                                    $('#gdcch_id').val(result[y].profile.cch_id);
                                    //$('#gdldap_id').val(result[y].profile.ldap_id);
                                    // $('#status').val(result[y].profile.status);
                                     $('#gdeffective_date').val(result[y].profile.effective_date);

                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});





//Tier 1 Form

$(document).ready(function(){

    $('#tieroneButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#tieroneForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            alert('Result' +JSON.stringify(response));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});










//Tier 1 search

$(document).ready(function(){

    $('#tieroneSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#tieroneSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            // $('#display7').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#t1username').val(result[y].profile.username);
                                    $('#t1password').val(result[y].profile.password);  //disable this
                                    $('#t1email').val(result[y].profile.email);
                                    $('#t1first_name').val(result[y].profile.first_name);
                                    $('#t1last_name').val(result[y].profile.last_name);
                                    $('#t1mobile').val(result[y].profile.phones["mobile"]);
                                    $('#t1office').val(result[y].profile.phones["office"]);
                                    $('#t1role').val(result[y].profile.role);
                                    $('#t1cch_id').val(result[y].profile.cch_id);
                                   // $('#t1ldap_id').val(result[y].profile.ldap_id);
                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});












//Tier 2 Form

$(document).ready(function(){

    $('#tiertwoButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#tiertwoForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            alert('Result' +JSON.stringify(response));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});










//Tier 2 search

$(document).ready(function(){

    $('#tiertwoSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#tiertwoSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            // $('#display7').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#t2username').val(result[y].profile.username);
                                    $('#t2password').val(result[y].profile.password);  //disable this
                                    $('#t2email').val(result[y].profile.email);
                                    $('#t2first_name').val(result[y].profile.first_name);
                                    $('#t2last_name').val(result[y].profile.last_name);
                                    $('#t2mobile').val(result[y].profile.phones["mobile"]);
                                    $('#t2office').val(result[y].profile.phones["office"]);
                                    $('#t2role').val(result[y].profile.role);
                                    $('#t2cch_id').val(result[y].profile.cch_id);
                                   // $('#t2ldap_id').val(result[y].profile.ldap_id);
                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});


// SEARCH  (TO DO!!!)
