import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Example</PanelHeader>
		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={<Avatar src={props.fetchedUser.photo_200}/>}
				description={props.fetchedUser.city.title}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</ListItem>
			<ListItem description={props.token}>
				Test Item
			</ListItem>
			<ListItem multiline>
				{`Geoposition is available: ${props.geo.available ? 'true' : 'false'}`}
        {`Latitude: ${props.geo.lat}`}
        {`Longitude: ${props.geo.long}`}
			</ListItem>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	geo: PropTypes.shape({
    available: PropTypes.number,
    lat: PropTypes.any,
    long: PropTypes.any
	}),
	token: PropTypes.string,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
