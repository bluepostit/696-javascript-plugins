import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  const select = $('#music-genres');
  select.select2();
};

export { initSelect2 };
