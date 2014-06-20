'use strict';

describe('CalculateService', function() {

	beforeEach(module('app'));

	it('should return 0 when all arguments are 0.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: 0, billableHoursPerWeek: 0, billableWeeksPerYear: 0, monthlyBusinessExpenses: 0, monthlyPersonalExpenses: 0 })).toBe(0);
	})) 

	it('should return 0 when all arguments are garbage.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: "foo", billableHoursPerWeek: "bar", billableWeeksPerYear: "baz", monthlyBusinessExpenses: "abc", monthlyPersonalExpenses: "def" })).toBe(0);
	})) 

	it('should return 25 when all arguments are 1.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: 1, billableHoursPerWeek: 1, billableWeeksPerYear: 1, monthlyBusinessExpenses: 1, monthlyPersonalExpenses: 1 })).toBe(25);
	})) 

	it('should return 1 when everything but expenses is 1.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: 1, billableHoursPerWeek: 1, billableWeeksPerYear: 1, monthlyBusinessExpenses: 0, monthlyPersonalExpenses: 0 })).toBe(1);
	})) 

	it('should return 0 when all arguments are negative.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: -1, billableHoursPerWeek: -1, billableWeeksPerYear: -1, monthlyBusinessExpenses: -1, monthlyPersonalExpenses: -1 })).toBe(0);
	})) 

	it('should return 0 when all profit is 0, hours per week is 30, weeks per year is 52 and no expenses.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: 0, billableHoursPerWeek: 30, billableWeeksPerYear: 52, monthlyBusinessExpenses: 0, monthlyPersonalExpenses: 0 })).toBe(0);
	})) 

	it('should return 81 when profit is 125000, hours per week is 30, weeks per year is 52 and no expenses.', inject(function(CalculateService) {
		expect(CalculateService.calc({ profitTarget: 125000, billableHoursPerWeek: 30, billableWeeksPerYear: 52, monthlyBusinessExpenses: 0, monthlyPersonalExpenses: 0 })).toBe(81);
	})) 

});
