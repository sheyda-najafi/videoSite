
import Contact from '@/components/page/Contact';
import GeneralContent from '@/components/structure/GeneralContent';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params; // ✅ await params
    return (
        <GeneralContent locale={locale} messagesPath="contact">
            <Contact
            />
        </GeneralContent>
    );
}
