export default function RateFormatFilter($sce) {
  return function(rate) {
    let result = '';
    for (let i = 0; i < rate; i++) {
      result = result.concat('<i class="fa fa-star"></i>');
    }

    return $sce.trustAsHtml(`${result} (${rate})`);
  };
}
