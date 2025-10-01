type InputType = 'text' | 'email' | 'message';

interface FormProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

interface FormItemsProps {
    type: InputType;
    htmlfor: string;
    label: string;
    rows?: number;
}

export function Form({ title, description, children }: FormProps) {
    return (
    <div className="flex flex-col text-left">
        <div className="space-y-4 lg:space-y-6">
            <h1 className="font-serif font-bold text-[#1A2B4C] text-5xl md:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
            <p className="font-sans text-base lg:text-2xl">{description}</p>
        </div>
        <form action="https://formsubmit.co/aamagantal@gmail.com" method="POST" className="max-w-xl lg:w-2xl py-8">
            {children}
        </form>
    </div>
    )
}

export function FormItems({ type, htmlfor, label, rows = 3 }: FormItemsProps) {
    if (type === 'text') {
        return (
            <div className="mb-6">
                <label htmlFor={htmlfor} className="block text-lg font-bold text-[#1A2B4C] mb-2">
                    {label}
                </label>
                <input
                type="text"
                name="name"
                id={label}
                className="w-full rounded-full border border-[#1A2B4C] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
            </div>
        );
    } else if (type === 'email') {
        return (
            <div className="mb-6">
                <label htmlFor={htmlfor} className="block text-lg font-bold text-[#1A2B4C] mb-2">
                {label}
                </label>
                <input
                type="email"
                name="email"
                id={label}
                className="w-full rounded-full border border-[#1A2B4C] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
            </div>
        );
    } else if (type === 'message') {
        return (
            <div className="mb-6">
                <label htmlFor={htmlfor} className="block text-lg font-bold text-[#1A2B4C] mb-2">
                {label}
                </label>
                <textarea
                id={label}
                name="message"
                rows={rows}
                className="w-full rounded-2xl border border-[#1A2B4C] px-4 py-2 resize-none md:resize-y focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
            </div>
        );
    } else {
        return null; // fallback if type is invalid
    }
}

 