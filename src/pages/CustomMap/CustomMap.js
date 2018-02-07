import Map from '../../components/Map/Map';
import VisualSlider from '../../components/VisualSlider/VisualSlider';
import VisualCafeDetail from '../../components/VisualCafeDetail/VisualCafeDetail';
import InputDropdown from '../../components/InputDropdown/InputDropdown.vue';


export default {
	name: 'customMap',
	components: {
		MapWrapper: Map,
		VisualCafeDetail,
		VisualSlider,
		InputDropdown,
	},
	data() {
		return {
			title: 'CustomMap',
			coffee: null,
		};
	},
	methods: {
		handleCoffeClick(coffee) {
		  this.coffee = coffee; // TODO: Hacer que se obtenga el café desde un getter
		  this.$router.push({name: 'coffee', params:{id: coffee.id}});
		},
		changeNeighborhood(value) {
				this.$store.dispatch('actionTest', value);
		},
		handleCloseCoffee(coffee) {
			this.coffee = null;
		}
	},
	computed: {
		neighborhood(){
			return this.$store.state.neighborhood;
		},
	},
};
