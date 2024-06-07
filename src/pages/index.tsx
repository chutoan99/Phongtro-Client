import { DefaultLayout } from '../layouts/default'
import ContainerComponent from '../modules/container/container.component'

export default function HomePage() {
	return <ContainerComponent categoryCode='' />
}
HomePage.Layout = DefaultLayout
