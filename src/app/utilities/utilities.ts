export function parseAPIErrors(response: any): string[]{
    const result: string[] = [];
    console.log(response)

    if (response.error) {
        if (typeof response.error === 'object') {
            result.push(response.error.title);
        }
        else{
            const errorsMap = response.error.errors;
            const entries = Object.entries(errorsMap);
            entries.forEach((array: any[]) => {
                const field = array[0];
                array[1].forEach((errorMessage: any) => {
                    result.push(`${field}: ${errorMessage}`);
                });
            })
            
        }
    }

    return result;
}