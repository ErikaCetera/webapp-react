const ReviewForm = ({ onSubmitFunction, formData, setFormData }) => {
    // Stampa i numeri da 0 a 5
    const availableVotes = Array.from({ length: 6 }, (_, i) => i);

    // Aggiorna valori degli input
    const setFieldValue = (event) => {
        const { name, value } = event.target;

        const newFormData = {
            ...formData,
            [name]: value
        };

        setFormData(newFormData);
    };

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                onSubmitFunction(formData);
            }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nome Utente</label>
                    <input value={formData.name} name="name" type="text" className="form-control" id="username" onChange={setFieldValue} />
                </div>

                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Seleziona voto</label>
                    <select name="vote" id="vote" value={formData.vote} onChange={setFieldValue} className="form-control">
                        {availableVotes.map((curVote) => (
                            <option key={curVote} value={curVote}>{curVote}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Recensione</label>
                    <textarea name="text" value={formData.text} className="form-control" id="text" onChange={setFieldValue}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default ReviewForm;
