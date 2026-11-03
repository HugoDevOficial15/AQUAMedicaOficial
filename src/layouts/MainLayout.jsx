// import Header from "../components/Header/Header";

// export default function MainLayout({
//     children
// }) {
//     return (
//         <>
//             <Header />
//             {children}
//         </>
//     );
// }



import Header from "../components/Header/Header";

export default function MainLayout({
    children,
    solidHeader = false
}) {
    return (
        <>
            <Header solid={solidHeader} />
            {children}
        </>
    );
}
