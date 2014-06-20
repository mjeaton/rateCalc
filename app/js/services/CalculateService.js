angular.module("app").factory("CalculateService", function($log) {
        return {
           calc: function(calculateData) {
				var yearlyBusinessExpenses = parseInt(calculateData.monthlyBusinessExpenses * 12, 10);
				var yearlyPersonalExpenses = parseInt(calculateData.monthlyPersonalExpenses * 12, 10);

				var totalExpenses = parseInt(yearlyPersonalExpenses + yearlyBusinessExpenses, 10);
				var totalHours = parseInt(calculateData.billableHoursPerWeek * calculateData.billableWeeksPerYear, 10);
				var totalMoney = parseInt(calculateData.profitTarget, 10) + totalExpenses;

				var returnVal = (totalMoney / totalHours);

				$log.info(totalMoney);
				$log.info(totalHours);
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

