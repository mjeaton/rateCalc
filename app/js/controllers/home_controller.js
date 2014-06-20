angular.module("app").controller('HomeController', function($scope, CalculateService) {

    $scope.data = {};
    $scope.calculatedAmount = 0;
	$scope.totalYearlyExpenses = 0;
	$scope.totalIncome = 0;
	$scope.hours = 0;
	$scope.weeks = 0;

    $scope.calculate = function() {
        var x = { profitTarget: $scope.data.targetProfit, billableHoursPerWeek: $scope.data.billableHoursPerWeek, billableWeeksPerYear: $scope.data.billableWeeksPerYear, monthlyBusinessExpenses: $scope.data.monthlyBusinessExpenses, monthlyPersonalExpenses: $scope.data.monthlyPersonalExpenses};
		$scope.totalYearlyExpenses = CalculateService.calculateYearlyExpenses(x);
        $scope.calculatedAmount = CalculateService.calc(x);
		$scope.hours = $scope.data.billableHoursPerWeek;
		$scope.weeks = $scope.data.billableWeeksPerYear;
		$scope.totalIncome = $scope.calculatedAmount * ($scope.data.billableHoursPerWeek * $scope.data.billableWeeksPerYear);
    };
});

