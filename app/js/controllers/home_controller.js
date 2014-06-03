angular.module("app").controller('HomeController', function($scope, CalculateService) {
    $scope.message = "this is a message";

    $scope.data = {};
    $scope.calculatedAmount = 0;

    $scope.calculate = function() {

        var x = { incomeTarget: $scope.data.targetIncome, billableHoursPerWeek: $scope.data.billableHoursPerWeek, billableWeeksPerYear: $scope.data.billableWeeksPerYear, monthlyExpenses: $scope.data.monthlyExpenses};

        $scope.calculatedAmount = CalculateService.calc(x).toFixed(2);
    };
});

