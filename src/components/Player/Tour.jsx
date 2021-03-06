/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '../Dialog/Dialog';

const TourDialog = ({ className, close, next, end, last, children }) => (
	<Dialog
		className={className}
		closeText="end tour"
		confirmText={last ? 'end' : 'next'}
		onClose={() => {
			close();
			end();
		}}
		onConfirm={last ? null : () => {
			close();
			next();
		}}
	>
		{children}
	</Dialog>
);

TourDialog.propTypes = {
	className: PropTypes.string,
	close: PropTypes.func,
	next: PropTypes.func,
	end: PropTypes.func,
	last: PropTypes.bool,
	children: PropTypes.node,
};

TourDialog.defaultProps = {
	close: () => null,
};

// TODO: somehow my neat highlight functionality got broken...
function Tour(props) {
	// const search = document.getElementById('search');
	// const playlist = document.getElementById('playlist');
	// const title = document.getElementById('title');
	// const controls = document.getElementById('controls');
	switch (props.step) {
	case 1:
		return (
			<TourDialog
				{...props}
			>
				<h3>About Tjube.ninja</h3>
				<p>
					Tjube.ninja allows you to play videos from a shared playlist.
					The videos are played back from a single public screen, I recommend placing it on a projector!
					You can add videos to the playlist using the remote at <a href={`/${window.room}`}>{`${window.location.host}/${window.room}`}</a>.
					<br />
					Tjube.ninja was made with <i className="fa fa-heart" style={{ color: 'red' }} /> by <a href="http://tjallingt.com/">Tjalling Tolle</a>
				</p>
			</TourDialog>
		);
	case 2:
		// search.style.zIndex = 10;
		// search.style.opacity = 1;
		return (
			<TourDialog
				{...props}
				// close={() => {
				// 	search.style.removeProperty('zIndex');
				// 	search.style.removeProperty('opacity');
				// }}
			>
				<h3>Check out the video and search bar <i className="fa fa-search" /></h3>
				<p>
					The video can be paused by clicking anywhere in the middle of the screen.
					On the bottom of the screen is a progress bar that you can click on to scrub through the video.
					The search bar allows you to add videos right from the public screen.
				</p>
			</TourDialog>
		);
	case 3:
		// playlist.style.zIndex = 10;
		// playlist.style.opacity = 1;
		// playlist.style.width = '25%';
		return (
			<TourDialog
				{...props}
				// close={() => {
				// 	playlist.style = {};
				// }}
			>
				<h3>This is the playlist <i className="fa fa-th-list" /></h3>
				<p>
					Your videos are added here! Hover your mouse over it to get a better look.
					You can remove videos from the playlist using the <i className="fa fa-times" /> button
					Drag and drop videos to sort the playlist in any way you want.
				</p>
			</TourDialog>
		);
	case 4:
		// title.style.zIndex = 10;
		return (
			<TourDialog
				{...props}
				// close={() => {
				// 	title.style = {};
				// }}
			>
				<h3>Here is the title (shock)</h3>
				<p>
					When the playlist is empty it also gives you short instructions.
					The subtitle is the title of the next video, you can click it to skip the current video.
				</p>
			</TourDialog>
		);
	case 5:
		// controls.style.zIndex = 10;
		return (
			<TourDialog
				{...props}
				// close={() => {
				// 	controls.style = {};
				// }}
				last
			>
				<h3>These are the controls</h3>
				<p>
					You can press the <i className="fa fa-expand" /> to toggle between your default and a 16:9 ratio video.
					Here you can always find the room code that you can use to visit the remote.
					If there is a problem please visit <a href="https://github.com/tjallingt/react-tjube"><i className="fa fa-github" /> GitHub</a> to let me know.
				</p>
			</TourDialog>
		);
	default:
		return null;
	}
}

Tour.propTypes = {
	step: PropTypes.number,
};

export default Tour;
