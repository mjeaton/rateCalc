angular.module("app").factory("CalculateService", function($log) {
        return {
           calc: function(calculateData) {
				var yearlyBusinessExpenses = calculateData.monthlyBusinessExpenses * 12;
				var yearlyPersonalExpenses = calculateData.monthlyPersonalExpenses * 12;

				var totalExpenses = parseInt(yearlyPersonalExpenses + yearlyBusinessExpenses, 10);
				var totalHours = parseInt(calculateData.billableHoursPerWeek * calculateData.billableWeeksPerYear, 10);
				var totalMoney = parseInt(calculateData.profitTarget + totalExpenses, 10);

				var returnVal = (totalMoney / totalHours);

				$log.info(returnVal);

				// if bogus data, just return 0
				if(isNaN(returnVal) || returnVal < 0) {
					return 0;
				}
				else {
					// want to round this up. using this method: http://stackoverflow.com/questions/5191088/how-to-round-up-a-number-in-javascript
					// is there a better way?
					return Math.ceil(returnVal);
				}
           }
        };
    });

