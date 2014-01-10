describe("Buttons tests", function() {
  it("tests buttons functions like turn lights on and off and be clicked", function() {
    var button = button('red');

    button.turnOn();
    expect(button.on).toBe(true);

    button.turnOff();
    expect(button.on).toBe(false);

    var clicked = false;

    button.click(function(){ clicked = true });
    expect(clicked).toBe(true);

  });
});

