/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

function AlbumsIndexController () {
  var vm = this;
  vm.newAlbum = {};

  vm.newAlbum = {
    name: 'How Big, How Blue, How Beautiful',
    artistName: 'Florence + The Machine'
  };

  vm.albums = [
    {
      name: 'Coming Home',
      artistName: 'Leon Bridges'
    },
    {
      name: 'Are We There',
      artistName: 'Sharon Van Etten'
    },
    {
      name: 'The Queen is Dead',
      artistName: 'The Smiths'
    }
  ];

}
