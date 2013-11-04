define(['../components/jquery/jquery', '../components/annyang/annyang'], function () {
  var url = 'http://localhost:8080/?serverfunction=ledSwitch&value=';

  var toggle = $('#switch');
  toggle.bind('change', function () {
    $.post(url + (toggle.is(':checked') ? 0 : 1));
  });

  function turnOn(){ toggle.prop('checked', true).change(); }
  function turnOff(){ toggle.prop('checked', false).change(); }

  var commands = {
    'on'   : turnOn,
    'up'   : turnOn,
    'off'  : turnOff,
    'down' : turnOff,
  };

  annyang.init(commands);
  annyang.start();  
});