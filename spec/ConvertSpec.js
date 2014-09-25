describe( "Convert library", function () {
    describe( "distance converter", function () {
        it("converts inches to centimeters", function () {
         expect(Convert(12, "in").to("cm")).toEqual(30.48);
        });
<!--
        it("converts centimeters to yards", function () {
         expect(Convert(2000, "cm").to("yards")).toEqual(21.87);
        });
-->
    });

    describe( "volume converter", function () {
 	   it("converts litres to gallons", function () {
 	       expect(Convert(3, "litres").to("gallons")).toEqual(0.79);
 	   });

 	   it("converts gallons to cups", function () {
 	       expect(Convert(2, "gallons").to("cups")).toEqual(32);
 	   });
	});
});