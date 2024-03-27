function findMatching() {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
}
function fuzzyMatch() {
    const drivers = 0;

    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });

    function fuzzyMatch(driver) {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    };

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
}
function matchName() {
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
}