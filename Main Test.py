import nltk
from nltk.tokenize import word_tokenize
from nltk import pos_tag

# Download the necessary NLTK models
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

def analyze_sentence(sentence):
    """
    Analyze a sentence and return each word along with its part of speech.
    """
    # Tokenize the sentence into words
    tokens = word_tokenize(sentence)

    # Perform POS tagging
    tagged = pos_tag(tokens)

    return tagged

# Example sentence
example_sentence = "The quick brown fox jumps over the lazy dog."
analysis_result = analyze_sentence(example_sentence)
print(analysis_result)
