import {
	AsideAcreageComponent,
	AsideNewHotComponent,
	AsideNewPostComponent,
	AsideSubLinkComponent,
	AuthorComponent
} from '../../components'

export default function AsideDetailComponent() {
	return (
		<aside id='aside'>
			<AuthorComponent />
			<AsideNewPostComponent />
			<AsideNewHotComponent />
			<AsideAcreageComponent />
			<AsideSubLinkComponent />
		</aside>
	)
}
