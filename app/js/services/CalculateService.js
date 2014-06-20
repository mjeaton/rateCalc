angular.module("app").factory("CalculateService", function($log) {
        return {
           calc: function(calculateData) {
				var yearlyBusinessExpenses = calculateData.monthlyBusinessExpenses * 12;
				var yearlyPersonalExpenses = calculateData.monthlyPersonalExpenses * 12;

				var totalExpenses = yearlyPersonalExpenses + yearlyBusinessExpenses;
				var totalHours = calculateData.billableHoursPerWeek * calculateData.billableWeeksPerYear;
				var totalMoney = Number(calculateData.profitTarget) + totalExpenses;

				var returnVal = (totalMoney / totalHours);

				// if bogus data, just return 0
				if(isNaN(returnVal) || returnVal < 0) {
					return 0;
				}
				else {
					return returnVal;
				}
           },
			calculateYearlyExpenses: function(calculateData) {
				var yearlyBusinessExpenses = calculateData.monthlyBusinessExpenses * 12;
				var yearlyPersonalExpenses = calculateData.monthlyPersonalExpenses * 12;
				return yearlyBusinessExpenses + yearlyPersonalExpenses;
			}
        };
    });

