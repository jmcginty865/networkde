$(document).ready(function(){
    $(".nav-link").click(function(){
        if ($(this).hasClass('active')){
            $('#' + this.hash.substr(1).toLowerCase()).toggleClass('active');
        }
    });
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
                                    $('#mobile').val(result[y].profile.phone["mobile"]);
                                    $('#home').val(result[y].profile.phone["home"]);
                                    $('#office').val(result[y].profile.phone["office"]);
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
                                    $('#ldap_id').val(result[y].profile.ldap_id);
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
                        // data : $('#memberSearchForm').val(),
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
                                    $('#cmoffice').val(result[y].profile.phone["office"]);
                                    $('#cmmobile').val(result[y].profile.phone["mobile"]);
                                    $('#cmpartner_id').val(result[y].profile.partner_id);
                                    $('#cmrole').val(result[y].profile.role);
                                    $('#cmstatus').val(result[y].profile.status);

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
                                    $('#cgmobile').val(result[y].profile.phone["mobile"]);
                                    $('#cghome').val(result[y].profile.phone["home"]);
                                    $('#cgrelationship').val(result[y].profile.relationship);
                                    $('#cgpartner_id').val(result[y].profile.partner_id);
                                    $('#cgrole').val(result[y].profile.role);
                                   // $('#birthdate').val(result[y].profile.birthdate);
                                    $('#member_partner_id').val(result[y].profile.member_partner_id);
                                   // $('#status').val(result[y].profile.status);
                                    // $('#effective_date').val(result[y].profile.effective_date);

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

//Guardian search

//Tier 1 Form

//Tier 1 search

//Tier 2 Form

//Tier 2 search

//oauth delegation or username and password option


// SEARCH  (TO DO!!!)
// create dropdown for each search terms
// pick from a drop down pick a value