describe( "Librairie de conversion d'expression", function () {
    describe( "convertit en lettres", function () {
	    describe( "les chiffres simples", function () {
    	    it("2", function () {
			 expect(ecritEnLettres(2)).toMatch("deux");
			});	
			
			it("6", function () {
			 expect(ecritEnLettres(6)).toMatch("six");
			});	
		});
		
	    describe( "les dizaines. Par exemple : 10", function () {
			it("10", function () {
			 expect(ecritEnLettres(10)).toMatch("dix");
			});
			
// 			it("15", function () {
// 			 expect(ecritEnLettres(15)).toMatch("quinze");
// 			});	

			it("17", function () {
			 expect(ecritEnLettres(17)).toMatch("dix-sept");
			});	
		});	
		
	    describe( "les dizaines. Par exemple : 20", function () {
			it("20", function () {
			 expect(ecritEnLettres(20)).toMatch("vingt");
			});	
			
			it("24", function () {
			 expect(ecritEnLettres(24)).toMatch("vingt-quatre");
			});	
		});	
    });
});