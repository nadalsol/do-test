/**
 *
 * Feed Per Ranger
 *
 * Alert the amount of feed that each Park Ranger should be responsible
 * for on that day.
 *
 */
function feedPerRanger(population, rangers) {
  var feedPerRanger = (population * 2) / rangers;
  alert('Each Park Ranger should load ' + feedPerRanger + ' lbs of feed today.');
}
feedPerRanger(1000, 25);
