angular.module("app").factory("CalculateService", function($log) {
        return {
           calc: function(calculateData) {

               $log.debug(calculateData);
               return (calculateData.monthlyExpenses * 12) / (calculateData.billableHoursPerWeek * calculateData.billableWeeksPerYear);
           }
        };
    });

