import ContainerComponent from '../containers/public/container.component'
import { DefaultLayout } from '../layouts/default'

export default function HomePage() {
	return <ContainerComponent categoryCode='' />
}
HomePage.Layout = DefaultLayout
