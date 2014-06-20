angular.module("app").controller('HomeController', function($scope, CalculateService) {

    $scope.data = {};
    $scope.calculatedAmount = 0;

    $scope.calculate = function() {
        var x = { profitTarget: $scope.data.targetProfit, billableHoursPerWeek: $scope.data.billableHoursPerWeek, billableWeeksPerYear: $scope.data.billableWeeksPerYear, monthlyBusinessExpenses: $scope.data.monthlyBusinessExpenses, monthlyPersonalExpenses: $scope.data.monthlyPersonalExpenses};
        $scope.calculatedAmount = CalculateService.calc(x);
    };
});

