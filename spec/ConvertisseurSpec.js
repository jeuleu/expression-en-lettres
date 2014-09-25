describe( "Librairie de conversion d'expression", function () {
    describe( "convertit en lettres", function () {
        it("nombre simple (2)", function () {
         expect(ecritEnLettres(2)).toMatch(/deux/);
        });	
        it("nombre simple (3)	", function () {
         expect(ecritEnLettres(3)).toMatch(/trois/);
        });	
        it("nombre simple", function () {
         expect(ecritEnLettres(4)).toMatch(/quatre/);
        });	
    });
});